import React from 'react';

export interface CoreBlockQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBlockQuoteSolid(props: CoreBlockQuoteSolidProps): React.ReactElement;
export default CoreBlockQuoteSolid;
