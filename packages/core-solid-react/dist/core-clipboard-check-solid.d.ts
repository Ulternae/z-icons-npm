import React from 'react';

export interface CoreClipboardCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClipboardCheckSolid(props: CoreClipboardCheckSolidProps): React.ReactElement;
export default CoreClipboardCheckSolid;
