import React from 'react';

export interface LanUserCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCog(props: LanUserCogProps): React.ReactElement;
export default LanUserCog;
