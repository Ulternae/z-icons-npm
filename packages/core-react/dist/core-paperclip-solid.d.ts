import React from 'react';

export interface CorePaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperclipSolid(props: CorePaperclipSolidProps): React.ReactElement;
export default CorePaperclipSolid;
