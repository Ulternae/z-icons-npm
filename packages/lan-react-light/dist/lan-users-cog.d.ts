import React from 'react';

export interface LanUsersCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersCog(props: LanUsersCogProps): React.ReactElement;
export default LanUsersCog;
