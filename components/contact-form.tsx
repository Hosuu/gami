import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Imię i nazwisko musi mieć co najmniej 2 znaki.',
	}),
	email: z.email({
		message: 'Proszę podać prawidłowy adres email.',
	}),
	phone: z.string().optional(),
	message: z.string().min(10, {
		message: 'Wiadomość musi mieć co najmniej 10 znaków.',
	}),
	terms: z.boolean().refine((val) => val === true, {
		message: 'Musisz zaakceptować regulamin.',
	}),
})

type FormValues = z.infer<typeof formSchema>

type ContactFormProps = React.HTMLAttributes<HTMLFormElement> & {}

const ContactForm: React.FC<ContactFormProps> = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			terms: false,
		},
	})

	function onSubmit(values: FormValues) {
		console.log('Form submitted:', values)
		alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col space-y-4'>
			<FieldGroup>
				<Field data-invalid={!!errors.name}>
					<FieldLabel htmlFor='name'>Imię i nazwisko</FieldLabel>
					<Input id='name' placeholder='Jan Kowalski' aria-invalid={!!errors.name} {...register('name')} />
					<FieldError>{errors.name?.message}</FieldError>
				</Field>

				<Field data-invalid={!!errors.email}>
					<FieldLabel htmlFor='email'>Adres email</FieldLabel>
					<Input id='email' type='email' placeholder='jan@firma.pl' aria-invalid={!!errors.email} {...register('email')} />
					<FieldError>{errors.email?.message}</FieldError>
				</Field>

				<Field>
					<FieldLabel htmlFor='phone'>Telefon</FieldLabel>
					<Input id='phone' type='tel' placeholder='+48 123 456 789' {...register('phone')} />
					<FieldDescription>Opcjonalne</FieldDescription>
				</Field>

				<Field data-invalid={!!errors.message} className='flex flex-1 flex-col'>
					<FieldLabel htmlFor='message'>Wiadomość</FieldLabel>
					<Textarea
						id='message'
						placeholder='Opisz swoje potrzeby...'
						className='flex-1 resize-none'
						aria-invalid={!!errors.message}
						{...register('message')}
					/>
					<FieldError>{errors.message?.message}</FieldError>
				</Field>

				<Controller
					name='terms'
					control={control}
					render={({ field }) => (
						<Field orientation='horizontal' data-invalid={!!errors.terms}>
							<Checkbox
								id='terms'
								checked={field.value}
								onCheckedChange={field.onChange}
								aria-invalid={!!errors.terms}
							/>
							<div className='flex flex-col gap-1'>
								<FieldLabel htmlFor='terms'>
									Akceptuję
									<Dialog>
										<DialogTrigger className='text-primary cursor-pointer'>
											regulamin i politykę prywatności
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Regulamin</DialogTitle>
												<DialogDescription className='text-justify'>
													Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o&nbsp;ochronie
													danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy.
													Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem
													poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich
													poprawiania, żądania zaprzestania ich przetwarzania przez wysłanie wiadomości
													e-mail na adres biuro@gami-pack.pl.
													<br />
													<br />
													Administratorem danych osobowych jest GAMI-PACK D. STACH SPÓŁKA KOMANDYTOWA
													(dawniej: P.P.H.U. GAMI PACK S.C. I. STACH, D. STACH) ul. Poniatowskiego 2, 41-253
													Czeladź.
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</FieldLabel>
								<FieldError>{errors.terms?.message}</FieldError>
							</div>
						</Field>
					)}
				/>
			</FieldGroup>

			<Button type='submit' className='w-full' size='lg'>
				Wyślij wiadomość
				<Send className='ml-2 h-4 w-4' />
			</Button>
		</form>
	)
}

export default ContactForm
