import React from 'react';

export interface CoreEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEllipsis(props: CoreEllipsisProps): React.ReactElement;
export default CoreEllipsis;
