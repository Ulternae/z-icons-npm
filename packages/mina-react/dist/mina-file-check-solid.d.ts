import React from 'react';

export interface MinaFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileCheckSolid(props: MinaFileCheckSolidProps): React.ReactElement;
export default MinaFileCheckSolid;
