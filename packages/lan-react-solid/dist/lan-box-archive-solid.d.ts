import React from 'react';

export interface LanBoxArchiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArchiveSolid(props: LanBoxArchiveSolidProps): React.ReactElement;
export default LanBoxArchiveSolid;
