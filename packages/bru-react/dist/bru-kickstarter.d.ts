import React from 'react';

export interface BruKickstarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKickstarter(props: BruKickstarterProps): React.ReactElement;
export default BruKickstarter;
