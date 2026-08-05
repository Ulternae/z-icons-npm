import React from 'react';

export interface MinaCloudOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudOffSolid(props: MinaCloudOffSolidProps): React.ReactElement;
export default MinaCloudOffSolid;
