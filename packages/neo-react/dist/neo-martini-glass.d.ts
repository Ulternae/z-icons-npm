import React from 'react';

export interface NeoMartiniGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMartiniGlass(props: NeoMartiniGlassProps): React.ReactElement;
export default NeoMartiniGlass;
