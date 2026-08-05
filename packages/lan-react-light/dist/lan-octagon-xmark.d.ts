import React from 'react';

export interface LanOctagonXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonXmark(props: LanOctagonXmarkProps): React.ReactElement;
export default LanOctagonXmark;
