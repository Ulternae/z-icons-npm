import React from 'react';

export interface MinaTextJustifySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTextJustifySolid: React.FC<MinaTextJustifySolidProps>;
export default MinaTextJustifySolid;
