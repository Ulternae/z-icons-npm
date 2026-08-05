import React from 'react';

export interface NeoEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEllipsis(props: NeoEllipsisProps): React.ReactElement;
export default NeoEllipsis;
