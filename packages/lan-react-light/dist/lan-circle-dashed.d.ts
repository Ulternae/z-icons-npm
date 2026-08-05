import React from 'react';

export interface LanCircleDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDashed(props: LanCircleDashedProps): React.ReactElement;
export default LanCircleDashed;
