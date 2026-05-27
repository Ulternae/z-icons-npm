import React from 'react';

export interface CoreInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreInboxSolid: React.FC<CoreInboxSolidProps>;
export default CoreInboxSolid;
