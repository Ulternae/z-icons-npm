import React from 'react';

export interface LanTShirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTShirt(props: LanTShirtProps): React.ReactElement;
export default LanTShirt;
