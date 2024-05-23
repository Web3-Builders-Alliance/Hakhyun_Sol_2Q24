use anchor_lang::prelude::*;

declare_id!("FcfJuUFBm84BJfKR2tFwYygrxF9urpagjsGSYb15dDS4");

#[program]
pub mod vault {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
