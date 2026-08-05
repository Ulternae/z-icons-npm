import React from 'react';

export interface LanHeartCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCircleXmark(props: LanHeartCircleXmarkProps): React.ReactElement;
export default LanHeartCircleXmark;
