import React from 'react';

export interface CorePaintbrushSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaintbrushSlash(props: CorePaintbrushSlashProps): React.ReactElement;
export default CorePaintbrushSlash;
