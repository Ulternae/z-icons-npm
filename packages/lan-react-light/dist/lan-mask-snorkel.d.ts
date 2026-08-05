import React from 'react';

export interface LanMaskSnorkelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskSnorkel(props: LanMaskSnorkelProps): React.ReactElement;
export default LanMaskSnorkel;
