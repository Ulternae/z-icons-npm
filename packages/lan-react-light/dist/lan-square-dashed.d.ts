import React from 'react';

export interface LanSquareDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashed(props: LanSquareDashedProps): React.ReactElement;
export default LanSquareDashed;
