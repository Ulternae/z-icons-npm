import React from 'react';

export interface CoreMartiniGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMartiniGlassSolid: React.FC<CoreMartiniGlassSolidProps>;
export default CoreMartiniGlassSolid;
