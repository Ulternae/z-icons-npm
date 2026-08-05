import React from 'react';

export interface NeoMartiniGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMartiniGlassSolid(props: NeoMartiniGlassSolidProps): React.ReactElement;
export default NeoMartiniGlassSolid;
