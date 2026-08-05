import React from 'react';

export interface MinaRepeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRepeatSolid(props: MinaRepeatSolidProps): React.ReactElement;
export default MinaRepeatSolid;
