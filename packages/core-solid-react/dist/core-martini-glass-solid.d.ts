import React from 'react';

export interface CoreMartiniGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMartiniGlassSolid(props: CoreMartiniGlassSolidProps): React.ReactElement;
export default CoreMartiniGlassSolid;
