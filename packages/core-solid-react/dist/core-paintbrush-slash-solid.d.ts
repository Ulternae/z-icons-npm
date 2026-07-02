import React from 'react';

export interface CorePaintbrushSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaintbrushSlashSolid(props: CorePaintbrushSlashSolidProps): React.ReactElement;
export default CorePaintbrushSlashSolid;
