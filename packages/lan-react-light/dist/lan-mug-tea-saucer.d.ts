import React from 'react';

export interface LanMugTeaSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTeaSaucer(props: LanMugTeaSaucerProps): React.ReactElement;
export default LanMugTeaSaucer;
