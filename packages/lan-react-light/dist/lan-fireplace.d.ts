import React from 'react';

export interface LanFireplaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireplace(props: LanFireplaceProps): React.ReactElement;
export default LanFireplace;
