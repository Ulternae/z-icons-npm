import React from 'react';

export interface NeoCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCloudSolid(props: NeoCloudSolidProps): React.ReactElement;
export default NeoCloudSolid;
