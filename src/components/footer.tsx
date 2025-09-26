export function Footer() {
  return (
    <footer className='border-t border-border bg-card/50 flex justify-between items-center flex-1 flex-col'>
      <div className='container px-4 py-6 md:px-6'>
        {/* <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'> */}
        {/* Column 1: Logo and Copyright */}
        <div className='flex items-center justify-center'>
          {/* <div className='text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            SynapseAI
          </div> */}
          <p className='text-xs text-muted-foreground'>SynapseAI © 2025</p>
        </div>

        {/* Column 2: Navigation Links 
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Navigation</h3>
          <nav className='flex flex-col space-y-2'>
            <Link
              href='/blog'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'>
              Blog
            </Link>
            <Link
              href='/about'
              className='text-sm text-muted-foreground hover:text-primary transition-colors'>
              About
            </Link>
          </nav>
        </div> */}

        {/* Column 3: Social Media
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Connect</h3>
          <div className='flex space-x-4'>
            <Link
              href='https://github.com'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='GitHub'>
              <Github className='h-5 w-5' />
            </Link>
            <Link
              href='https://twitter.com'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Twitter'>
              <Twitter className='h-5 w-5' />
            </Link>
            <Link
              href='https://linkedin.com'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='LinkedIn'>
              <Linkedin className='h-5 w-5' />
            </Link>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </footer>
  )
}
