import React from 'react';

export interface LanFaceFlushedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFlushedSolid(props: LanFaceFlushedSolidProps): React.ReactElement;
export default LanFaceFlushedSolid;
