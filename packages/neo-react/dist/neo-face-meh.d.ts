import React from 'react';

export interface NeoFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFaceMeh(props: NeoFaceMehProps): React.ReactElement;
export default NeoFaceMeh;
