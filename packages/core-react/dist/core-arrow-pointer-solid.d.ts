import React from 'react';

export interface CoreArrowPointerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowPointerSolid(props: CoreArrowPointerSolidProps): React.ReactElement;
export default CoreArrowPointerSolid;
