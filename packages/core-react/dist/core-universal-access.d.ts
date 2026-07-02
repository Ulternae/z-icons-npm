import React from 'react';

export interface CoreUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUniversalAccess(props: CoreUniversalAccessProps): React.ReactElement;
export default CoreUniversalAccess;
