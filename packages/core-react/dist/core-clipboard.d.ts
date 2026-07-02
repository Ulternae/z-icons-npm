import React from 'react';

export interface CoreClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClipboard(props: CoreClipboardProps): React.ReactElement;
export default CoreClipboard;
