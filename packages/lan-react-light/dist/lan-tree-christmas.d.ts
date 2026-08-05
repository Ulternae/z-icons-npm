import React from 'react';

export interface LanTreeChristmasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeChristmas(props: LanTreeChristmasProps): React.ReactElement;
export default LanTreeChristmas;
