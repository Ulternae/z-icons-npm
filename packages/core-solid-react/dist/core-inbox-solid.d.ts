import React from 'react';

export interface CoreInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreInboxSolid(props: CoreInboxSolidProps): React.ReactElement;
export default CoreInboxSolid;
