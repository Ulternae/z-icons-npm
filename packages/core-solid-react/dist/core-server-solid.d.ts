import React from 'react';

export interface CoreServerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreServerSolid(props: CoreServerSolidProps): React.ReactElement;
export default CoreServerSolid;
