import React from 'react';

export interface CoreClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClipboardSolid(props: CoreClipboardSolidProps): React.ReactElement;
export default CoreClipboardSolid;
