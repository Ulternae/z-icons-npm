import React from 'react';

export interface MinaBookmarkUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkUser: React.FC<MinaBookmarkUserProps>;
export default MinaBookmarkUser;
