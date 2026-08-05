import React from 'react';

export interface MinaDoorClosedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDoorClosedSolid(props: MinaDoorClosedSolidProps): React.ReactElement;
export default MinaDoorClosedSolid;
