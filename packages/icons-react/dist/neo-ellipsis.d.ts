import React from 'react';

export interface NeoEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEllipsis: React.FC<NeoEllipsisProps>;
export default NeoEllipsis;
