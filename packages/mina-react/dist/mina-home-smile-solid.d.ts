import React from 'react';

export interface MinaHomeSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeSmileSolid(props: MinaHomeSmileSolidProps): React.ReactElement;
export default MinaHomeSmileSolid;
