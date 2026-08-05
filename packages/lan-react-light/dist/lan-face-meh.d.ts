import React from 'react';

export interface LanFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMeh(props: LanFaceMehProps): React.ReactElement;
export default LanFaceMeh;
