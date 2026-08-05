import React from 'react';

export interface MinaBookmarkUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkUser(props: MinaBookmarkUserProps): React.ReactElement;
export default MinaBookmarkUser;
