import React from 'react';

export interface CoreMartiniGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMartiniGlass(props: CoreMartiniGlassProps): React.ReactElement;
export default CoreMartiniGlass;
