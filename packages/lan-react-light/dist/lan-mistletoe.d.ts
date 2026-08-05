import React from 'react';

export interface LanMistletoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMistletoe(props: LanMistletoeProps): React.ReactElement;
export default LanMistletoe;
