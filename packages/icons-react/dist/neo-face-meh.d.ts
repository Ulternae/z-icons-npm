import React from 'react';

export interface NeoFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceMeh: React.FC<NeoFaceMehProps>;
export default NeoFaceMeh;
