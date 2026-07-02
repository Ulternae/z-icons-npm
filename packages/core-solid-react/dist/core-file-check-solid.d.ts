import React from 'react';

export interface CoreFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileCheckSolid(props: CoreFileCheckSolidProps): React.ReactElement;
export default CoreFileCheckSolid;
