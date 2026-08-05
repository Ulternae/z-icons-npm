import React from 'react';

export interface LanBookLawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookLaw(props: LanBookLawProps): React.ReactElement;
export default LanBookLaw;
