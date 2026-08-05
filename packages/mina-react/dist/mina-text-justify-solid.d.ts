import React from 'react';

export interface MinaTextJustifySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTextJustifySolid(props: MinaTextJustifySolidProps): React.ReactElement;
export default MinaTextJustifySolid;
