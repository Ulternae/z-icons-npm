import React from 'react';

export interface BruEdgeLegacyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEdgeLegacy(props: BruEdgeLegacyProps): React.ReactElement;
export default BruEdgeLegacy;
