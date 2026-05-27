import React from 'react';

export interface CoreMartiniGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMartiniGlass: React.FC<CoreMartiniGlassProps>;
export default CoreMartiniGlass;
