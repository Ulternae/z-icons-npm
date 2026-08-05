import React from 'react';

export interface MinaRepeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRepeat(props: MinaRepeatProps): React.ReactElement;
export default MinaRepeat;
